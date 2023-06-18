package com.uep.wap.repository.accommodationObjectType;

import com.uep.wap.model.AccommodationObjectType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccommodationObjectTypeRepository extends JpaRepository<AccommodationObjectType, Integer> {
}