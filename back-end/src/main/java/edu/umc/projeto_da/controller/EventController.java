package edu.umc.projeto_da.controller;

import edu.umc.projeto_da.entity.Event;
import edu.umc.projeto_da.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventoService eventService;

    @GetMapping("/listall")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable int id) {
        try {
            Event event = eventService.getEventById(id);
            return ResponseEntity.ok(event);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateEvent(@RequestBody Event event) {
        try {
            Event updatedEvent = eventService.updateEvent(event);
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer id) {
        try {
            eventService.deleteEvent(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.notFound().build();
        }
    }

}
