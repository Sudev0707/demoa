import React from "react";

class AddContent extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add=(e)=> {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === "")
        {
            alert("all fields are mandatory !");
            return;
        }
        console.log(this.state)
    }

    render() {
        return (
            <div className="ui main col-4  m-2 add-form">
                <h5 className="text-center">Add Contact</h5>
                <form className="form form-control border-0" onSubmit={this.add}>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="input-group-sm-example">Name</span>
                        <input type="text" class="form-control" aria-label="Small input group" aria-describedby="input-group-sm" placeholder="Name" autoFocus value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="input-group-sm-example">Email</span>
                        <input type="text" class="form-control" aria-label="Small input group" aria-describedby="input-group-sm" placeholder="Email" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContent;