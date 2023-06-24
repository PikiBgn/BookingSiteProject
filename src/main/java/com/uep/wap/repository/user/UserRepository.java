package com.uep.wap.repository.user;

import com.uep.wap.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query( "select ud from User ud where ud.email = :aEmail" )
    User findByEmail( @Param( "aEmail" ) String aEmail );

}
