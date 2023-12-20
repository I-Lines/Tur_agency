import React from "react";
import {Link} from 'react-router-dom';

export function PaskagesBtn() {
    return (
          <div>
            <Link to="/paskages">
                <button type="button" className="btn btn-success btn-lg">Our Full Paskages
                </button>
                </Link>
          </div>  

    ) 
}