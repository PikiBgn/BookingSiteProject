package com.uep.wap.service.room;

import com.uep.wap.model.Room;
import com.uep.wap.model.User;
import com.uep.wap.repository.Room.RoomRepository;
import com.uep.wap.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService implements IRoomService {

    @Autowired
    RoomRepository roomRepository;
    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room getRoomById(int id) {
        return roomRepository.findById(id).orElse(null);
    }

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(int id) {
    roomRepository.deleteById(id);    }
}
