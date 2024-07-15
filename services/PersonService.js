import axios from "axios";
import Person from "../db/models/person.js";

class PersonService {
    async getAll() {
        try {
            const persons = await axios.get('https://rickandmortyapi.com/api/character')
            let i = 0
            for(const character of persons.data.results) {
                await Person.create({name: character.name, data: persons.data.results[i]})
                i++
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export default new PersonService()