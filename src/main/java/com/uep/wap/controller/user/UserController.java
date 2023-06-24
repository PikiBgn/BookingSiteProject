package com.uep.wap.controller.user;

import com.uep.wap.model.User;
import com.uep.wap.service.user.UserService;
import com.uep.wap.web_dto.LoginRequestDto;
import com.uep.wap.web_dto.LoginResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4401")
@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return userService.saveUser(user);
    }
    @PostMapping( "/auth" )
    @CrossOrigin("*")
    public ResponseEntity<LoginResponseDto> logIn(
            @RequestBody LoginRequestDto aLoginRequestDto )
    {
        var loginServerResponse = userService.logIntoSystemAttempt( aLoginRequestDto );
        return new ResponseEntity<>( loginServerResponse, HttpStatus.ACCEPTED );
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

}
