package com.uep.wap.service.user;

import com.uep.wap.model.User;
import com.uep.wap.repository.user.UserRepository;
import com.uep.wap.web_dto.LoginRequestDto;
import com.uep.wap.web_dto.LoginResponseDto;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Objects;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{

    public static final int MAX_FAILED_ATTEMPTS = 100;
    private static final long LOCK_TIME_DURATION = 60 * 60 * 24 * 1000; // 24 hours
    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public LoginResponseDto logIntoSystemAttempt(LoginRequestDto aLoginRequestDto )
    {
        Optional< User > userToCheck = findByLogin( aLoginRequestDto.getEmail() );
        if( userToCheck.isPresent() )
        {
            User foundUser = userToCheck.get();
            unlockIfLockTimeExpired( foundUser );
            boolean checkPass = checkPassword( foundUser, aLoginRequestDto.getPassword() );

            if( checkPass && !foundUser.isLocked() )
            {
                resetFailedAttempts( foundUser );
                userRepository.save( foundUser );

                return new LoginResponseDto( foundUser.getEmail(), foundUser.getPassword());
            }
            else if( !checkPass && foundUser.getFailedAttempts() < UserService.MAX_FAILED_ATTEMPTS )
            {
                increaseFailedAttempts( foundUser );
                throw new RuntimeException( "Wrong Password!" );
            }
            else
            {
                if( foundUser.getFailedAttempts() == UserService.MAX_FAILED_ATTEMPTS )
                    lock( foundUser );
                throw new RuntimeException( "Account Locked!" );
            }
        }
        else
        {
            throw new RuntimeException( "User not found!" );
        }
    }

    public Optional< User > findByLogin( String aEmail )
    {
        var foundUser = userRepository.findByEmail( aEmail );
        if( foundUser == null )
        {
            return Optional.empty();
        }
        else
        {
            return Optional.of( foundUser );
        }
    }

    @Transactional
    public void unlockIfLockTimeExpired( User user )
    {
        LocalDateTime currentTimeInMillis = LocalDateTime.now();
        if( user.isLocked() )
        {
            LocalDateTime lockTimeInMillis = user.getWhenAccountLocked();

            if (lockTimeInMillis.plus( LOCK_TIME_DURATION, ChronoUnit.MILLIS )
                    .isBefore( currentTimeInMillis ))
            {
                user.setLocked( false );
                user.setWhenAccountLocked( null );
                user.setFailedAttempts( 0 );
                userRepository.save( user );
            }
        }
    }

    public boolean checkPassword( User user, String password )
    {
        return Objects.equals(password, user.getPassword());
    }

    @Transactional
    public void resetFailedAttempts( User user )
    {
        user.setFailedAttempts( 0 );
        userRepository.save( user );
    }

    @Transactional
    public void increaseFailedAttempts( User user )
    {
        user.increaseFailAttempts();
        userRepository.save( user );
    }
    @Transactional
    public void lock( User user )
    {
        user.setLocked( true );
        user.setWhenAccountLocked( LocalDateTime.now() );

        userRepository.save( user );
    }


}
