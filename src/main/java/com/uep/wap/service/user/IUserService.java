package com.uep.wap.service.user;

import com.uep.wap.model.User;

import java.util.List;

public interface IUserService {
    List<User> getAllUsers();
    User getUserById(int id);
    User saveUser(User user);
    void deleteUser(int id);
}
