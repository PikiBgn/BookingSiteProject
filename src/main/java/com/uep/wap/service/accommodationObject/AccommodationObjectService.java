package com.uep.wap.service.accommodationObject;

import com.uep.wap.model.AccommodationObject;
import com.uep.wap.repository.accommodationObject.AccommodationObjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccommodationObjectService implements IAccommodationObjectService {

    @Autowired
    private AccommodationObjectRepository accommodationObjectRepository;

    @Override
    public List<AccommodationObject> getAllAccommodationObjects() {
        return accommodationObjectRepository.findAll();
    }

    @Override
    public AccommodationObject getAccommodationObjectById(int id) {
        return accommodationObjectRepository.findById(id).orElse(null);
    }

    @Override
    public AccommodationObject saveAccommodationObject(AccommodationObject accommodationObject) {
        return accommodationObjectRepository.save(accommodationObject);
    }

    @Override
    public void deleteAccommodationObject(int id) {
        accommodationObjectRepository.deleteById(id);
    }
}