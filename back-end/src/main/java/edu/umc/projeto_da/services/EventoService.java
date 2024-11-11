package edu.umc.projeto_da.services;

import edu.umc.projeto_da.entity.Event;
import edu.umc.projeto_da.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Integer id) {
        Optional<Event> searchedEvent = eventRepository.findById(id);

        if (searchedEvent.isEmpty()) throw new IllegalArgumentException("ID Inválido");

        Event event = searchedEvent.get();
        return eventRepository.save(event);
    }

    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Event updatedEvent) {
        Optional<Event> searchedEvent = eventRepository.findById(updatedEvent.getId());

        if (searchedEvent.isEmpty()) throw new IllegalArgumentException("ID não encontrado");

        Event event = searchedEvent.get();

        event.setId(updatedEvent.getId());
        event.setTitulo(event.getTitulo());
        event.setDescricao(updatedEvent.getDescricao());
        event.setData(updatedEvent.getData());
        event.setHorarioInicio(updatedEvent.getHorarioInicio());
        event.setHorarioTermino(updatedEvent.getHorarioTermino());
        event.setEndereco(updatedEvent.getEndereco());
        event.setQtdIngressos(updatedEvent.getQtdIngressos());
        event.setPrecoIngresso(updatedEvent.getPrecoIngresso());
        event.setOrganizador(updatedEvent.getOrganizador());

        return eventRepository.save(event);
    }

    public void deleteEvent(int id) {
        Optional<Event> searchedEvent = eventRepository.findById(id);

        if (searchedEvent.isEmpty()) throw new IllegalArgumentException("ID não encontrado");

        Event event = searchedEvent.get();
        eventRepository.deleteById(event.getId());
    }
}
