package com.uep.wap.repository.user;

import com.uep.wap.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query(value = "SELECT * FROM user u where u.email = ?1",
    nativeQuery = true)
    Optional<User> findByEmail(String aEmail );

}
