package com.wineko.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
    private Integer id;

    @Column(name ="number_order")
    private String numberOrder;

    @Column(name ="city")
    private String city;

    @Column(name ="zip_code")
    private String zipCode;

    @Column(name ="street_name")
    private String streetName;

    @Column(name ="street_number")
    private String streetNumber;

    @Column(name ="date_creation")
    private Date dateCreation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id")
    private Users users;

}
