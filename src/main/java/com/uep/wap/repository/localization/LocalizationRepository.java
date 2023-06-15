package com.uep.wap.repository.localization;

import com.uep.wap.model.Localization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalizationRepository extends JpaRepository<Localization, Integer> {
}