import React,{useContext} from 'react';

import SimpleContext from '../../contex/simpleContex';
import { Button } from 'react-bootstrap';
import { context } from 'react-bootstrap/esm/AccordionContext';


const NewPerson = ({   }) => {
    const context =useContext(SimpleContext);

    return (
        // <SimpleContext.Consumer  >
        //     {context => (
                <div>
                    <div className="m-2 p-2" >
                        <form className="form-inline justify-content-center" 
                        onSubmit={event => event.preventDefault()}>
                            <div className=" input-group w-25 mx-auto">
                                <input
                                    type="text"
                                    placeholder="give a person"
                                    onChange={context.setPerson}
                                    value={context.person.fullname}
                                    className="form-control"
                                />
                                <div className="input-group-prepend ">
                                    <Button type="submit"
                                        size="md"
                                        onClick={context.handelNewPerson}
                                        className=" fa fa-plus"
                                        variant="success"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


        //     )}
        // </SimpleContext.Consumer>

    );
}

export default NewPerson;