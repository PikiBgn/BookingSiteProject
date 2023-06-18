package com.uep.wap.service.accommodationObject;

import com.uep.wap.model.AccommodationObject;

import java.util.List;
public interface IAccommodationObjectService {
    List<AccommodationObject> getAllAccommodationObjects();
    AccommodationObject getAccommodationObjectById(int id);
    AccommodationObject saveAccommodationObject(AccommodationObject accommodationObject);
    void deleteAccommodationObject(int id);
}
