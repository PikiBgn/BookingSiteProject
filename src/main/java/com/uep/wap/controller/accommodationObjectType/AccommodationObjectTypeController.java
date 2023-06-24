package com.uep.wap.controller.accommodationObjectType;

import com.uep.wap.model.AccommodationObjectType;
import com.uep.wap.service.accommodationObjectType.AccommodationObjectTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4401")
@RestController
@RequestMapping(value = "/accommodation-object-type")
public class AccommodationObjectTypeController {

    @Autowired
    private AccommodationObjectTypeService accommodationObjectTypeService;

    @GetMapping
    public List<AccommodationObjectType> getAllAccommodationObjectTypes() {
        return accommodationObjectTypeService.getAllAccommodationObjectTypes();
    }

    @GetMapping("/{id}")
    public AccommodationObjectType getAccommodationObjectTypeById(@PathVariable int id) {
        return accommodationObjectTypeService.getAccommodationObjectTypeById(id);
    }

    @PostMapping
    public AccommodationObjectType createAccommodationObjectType(@RequestBody AccommodationObjectType accommodationObjectType) {
        return accommodationObjectTypeService.saveAccommodationObjectType(accommodationObjectType);
    }

    @PutMapping("/{id}")
    public AccommodationObjectType updateAccommodationObjectType(@PathVariable int id, @RequestBody AccommodationObjectType accommodationObjectType) {
        accommodationObjectType.setId(id);
        return accommodationObjectTypeService.saveAccommodationObjectType(accommodationObjectType);
    }

    @DeleteMapping("/{id}")
    public void deleteAccommodationObjectType(@PathVariable int id) {
        accommodationObjectTypeService.deleteAccommodationObjectType(id);
    }
}