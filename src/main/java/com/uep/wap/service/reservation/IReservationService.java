package com.uep.wap.service.reservation;

import com.uep.wap.model.Reservation;

import java.util.List;

public interface IReservationService {
    List<Reservation> getAllReservations();
    Reservation getReservationById(int id);
    Reservation saveReservation(Reservation reservation);
    void deleteReservation(int id);
}