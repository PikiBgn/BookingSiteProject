package com.uep.wap.controller.accommodationObject;

import com.uep.wap.model.AccommodationObject;
import com.uep.wap.service.accommodationObject.AccommodationObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/accommodation-object")
public class AccommodationObjectController {

    @Autowired
    private AccommodationObjectService accommodationObjectService;

    @GetMapping
    public List<AccommodationObject> getAllAccommodationObjects() {
        return accommodationObjectService.getAllAccommodationObjects();
    }

    @GetMapping("/{id}")
    public AccommodationObject getAccommodationObjectById(@PathVariable int id) {
        return accommodationObjectService.getAccommodationObjectById(id);
    }

    @PostMapping
    public AccommodationObject createAccommodationObject(@RequestBody AccommodationObject accommodationObject) {
        return accommodationObjectService.saveAccommodationObject(accommodationObject);
    }

    @PutMapping("/{id}")
    public AccommodationObject updateAccommodationObject(@PathVariable int id, @RequestBody AccommodationObject accommodationObject) {
        accommodationObject.setId(id);
        return accommodationObjectService.saveAccommodationObject(accommodationObject);
    }

    @DeleteMapping("/{id}")
    public void deleteAccommodationObject(@PathVariable int id) {
        accommodationObjectService.deleteAccommodationObject(id);
    }
}