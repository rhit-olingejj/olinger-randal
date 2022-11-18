package com.olinger.family.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.IdClass;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString(doNotUseGetters = true)
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Data
@Table(name = "Users")
public class LoginDTO implements Serializable {

    @Id
    @Column(name = "username")
    @JsonProperty(value = "username")
    private String username;

    @Column(name = "hash")
    @JsonProperty(value = "hash")
    private String hash;

    @Column(name = "salt")
    @JsonProperty(value = "salt")
    private String salt;


}

