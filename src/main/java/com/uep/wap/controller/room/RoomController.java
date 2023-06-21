package com.uep.wap.controller.room;

import com.uep.wap.model.Room;
import com.uep.wap.service.room.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable int id) {
        return roomService.getRoomById(id);
    }

    @PostMapping
    public Room createRoom(@RequestBody Room user) {
        return roomService.saveRoom(user);
    }

    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable int id, @RequestBody Room user) {
        user.setId(id);
        return roomService.saveRoom(user);
    }

    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable int id) {
        roomService.deleteRoom(id);
    }
}
