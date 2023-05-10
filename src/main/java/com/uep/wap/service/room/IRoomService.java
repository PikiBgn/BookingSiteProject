package com.uep.wap.service.room;

import com.uep.wap.model.Room;

import java.util.List;

public interface IRoomService {
    List<Room> getAllRooms();
    Room getRoomById(int id);
    Room saveRoom(Room room);
    void deleteRoom(int id);
}
