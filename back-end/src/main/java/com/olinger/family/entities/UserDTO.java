package com.olinger.family.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@ToString(doNotUseGetters = true)
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class UserDTO {
    @JsonProperty("username")
    @NonNull
    private String username;

    @JsonProperty("password")
    @NonNull
    private String password;

}

