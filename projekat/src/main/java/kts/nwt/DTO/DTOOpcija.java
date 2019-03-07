package kts.nwt.DTO;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.As;
import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;

@JsonTypeInfo(use = Id.NAME, include = As.PROPERTY, property = "type")
@JsonSubTypes({
    @JsonSubTypes.Type(value = DTOObicnaOpcija.class, name = "DTOObicnaOpcija"),
    @JsonSubTypes.Type(value = DTOStanarOpcija.class, name = "DTOStanarOpcija"),
    @JsonSubTypes.Type(value = DTOFirmaOpcija.class, name = "DTOFirmaOpcija")
})
public abstract class DTOOpcija {
	
}
