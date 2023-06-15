package com.uep.wap.service.localization;

import com.uep.wap.model.Localization;

import java.util.List;

public interface ILocalizationService {
    List<Localization> getAllLocalizations();
    Localization getLocalizationById(int id);
    Localization saveLocalization(Localization localization);
    void deleteLocalization(int id);
}