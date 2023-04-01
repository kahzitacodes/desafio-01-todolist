import { PlusCircle } from "@phosphor-icons/react";
import { InputContainer } from "./styles";
import { ChangeEvent, InvalidEvent } from "react";
import { Button } from "../Button";
import { ISearch } from "./types";

export function SearchBar({ onHandleChange, ...props }: ISearch) {

    function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        onHandleChange(event);
    }
    return (
        <InputContainer>
            <input onChange={handleChange} type="text" onInvalid={handleTaskInvalid} required placeholder="Adicione uma nova tarefa" {...props} />
            <Button type="submit" label="Criar" icon={<PlusCircle size={16} />} />
        </InputContainer>
    );
}