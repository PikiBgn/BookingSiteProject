package com.uep.wap.repository.accommodationObject;

import com.uep.wap.model.AccommodationObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccommodationObjectRepository extends JpaRepository<AccommodationObject, Integer> {
}