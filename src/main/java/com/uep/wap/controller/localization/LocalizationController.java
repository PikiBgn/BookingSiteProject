package com.uep.wap.controller.localization;

import com.uep.wap.model.Localization;
import com.uep.wap.service.localization.LocalizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4401")
@RestController
@RequestMapping(value = "/localization")
public class LocalizationController {

    @Autowired
    private LocalizationService localizationService;

    @GetMapping
    public List<Localization> getAllLocalizations() {
        return localizationService.getAllLocalizations();
    }

    @GetMapping("/{id}")
    public Localization getLocalizationById(@PathVariable int id) {
        return localizationService.getLocalizationById(id);
    }

    @PostMapping
    public Localization createLocalization(@RequestBody Localization localization) {
        return localizationService.saveLocalization(localization);
    }

    @PutMapping("/{id}")
    public Localization updateLocalization(@PathVariable int id, @RequestBody Localization localization) {
        localization.setId(id);
        return localizationService.saveLocalization(localization);
    }

    @DeleteMapping("/{id}")
    public void deleteLocalization(@PathVariable int id) {
        localizationService.deleteLocalization(id);
    }
}