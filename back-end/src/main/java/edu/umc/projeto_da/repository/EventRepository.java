package edu.umc.projeto_da.repository;

import edu.umc.projeto_da.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {
}
