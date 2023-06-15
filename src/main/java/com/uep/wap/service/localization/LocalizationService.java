package com.uep.wap.service.localization;

import com.uep.wap.model.Localization;
import com.uep.wap.repository.localization.LocalizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocalizationService implements ILocalizationService {

    @Autowired
    LocalizationRepository localizationRepository;

    @Override
    public List<Localization> getAllLocalizations() {
        return localizationRepository.findAll();
    }

    @Override
    public Localization getLocalizationById(int id) {
        return localizationRepository.findById(id).orElse(null);
    }

    @Override
    public Localization saveLocalization(Localization localization) {
        return localizationRepository.save(localization);
    }

    @Override
    public void deleteLocalization(int id) {
        localizationRepository.deleteById(id);
    }
}