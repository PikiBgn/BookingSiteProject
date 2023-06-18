package com.uep.wap.service.accommodationObjectType;

import com.uep.wap.model.AccommodationObjectType;
import com.uep.wap.repository.accommodationObjectType.AccommodationObjectTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccommodationObjectTypeService implements IAccommodationObjectTypeService {

    @Autowired
    AccommodationObjectTypeRepository accommodationObjectTypeRepository;

    @Override
    public List<AccommodationObjectType> getAllAccommodationObjectTypes() {
        return accommodationObjectTypeRepository.findAll();
    }

    @Override
    public AccommodationObjectType getAccommodationObjectTypeById(int id) {
        return accommodationObjectTypeRepository.findById(id).orElse(null);
    }

    @Override
    public AccommodationObjectType saveAccommodationObjectType(AccommodationObjectType accommodationObjectType) {
        return accommodationObjectTypeRepository.save(accommodationObjectType);
    }

    @Override
    public void deleteAccommodationObjectType(int id) {
        accommodationObjectTypeRepository.deleteById(id);
    }
}