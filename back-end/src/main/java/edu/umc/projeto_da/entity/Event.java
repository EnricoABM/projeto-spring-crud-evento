package edu.umc.projeto_da.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "evento")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "titulo")
    private String titulo;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "data")
    private LocalDate data;
    @Column(name = "horarioInicio")
    private LocalTime horarioInicio;
    @Column(name = "horarioTermino")
    private LocalTime horarioTermino;
    @Column(name = "endereco")
    private String endereco;
    @Column(name = "qtdIngressos")
    private Integer qtdIngressos;
    @Column(name = "precoIngresso")
    private Double precoIngresso;
    @Column(name = "organizador")
    private String organizador;
}
