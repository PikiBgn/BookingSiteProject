package com.uep.wap.service.accommodationObjectType;

import com.uep.wap.model.AccommodationObjectType;

import java.util.List;

public interface IAccommodationObjectTypeService {
    List<AccommodationObjectType> getAllAccommodationObjectTypes();
    AccommodationObjectType getAccommodationObjectTypeById(int id);
    AccommodationObjectType saveAccommodationObjectType(AccommodationObjectType accommodationObjectType);
    void deleteAccommodationObjectType(int id);
}