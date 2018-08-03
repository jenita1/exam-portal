import React,{Component} from 'react';
import Image from '../Slider/image/aws0.jpg';


export default class Testmodule extends Component {
    constructor() {
        super();
    }

    render(){
    return(
      <div className="image">
          <img src={Image}/>
              <section className="grid default-grid">

                  <div className="container">

                      <div className="row sample-row">

                          <div className="col-xs-6 col-sm-4 gutter-margin-xs-md">
                              <div className="inner" ><a href="#Testmode/EC2">


                                  <button type="button" className="btn btn-success">EC2</button></a>
                              </div>
                          </div>
                          <div className="col-xs-6 col-sm-8 gutter-margin-xs-md">
                              <div className="inner" href="#EBS">
                                  <button type="button" className="btn btn-success">EBS</button>
                              </div>
                          </div>

                      </div>


                  <div className="container">

                      <div className="row sample-row">
                          <div className="col-xs-6 col-sm-4 gutter-margin-xs-md">
                              <div className="inner"><a href="#S3"></a>


                                  <button type="button" className="btn btn-success">S3</button>
                              </div>
                          </div>
                          <div className="col-xs-6 col-sm-8 gutter-margin-xs-md">
                              <div className="inner" href="#VPC">
                                  <button type="button" className="btn btn-success">VPC</button>
                              </div>
                          </div>
                      </div>

                  </div>
                  </div>

              </section>
              <section className="grid default-grid">
                  <div className="container">
                      <div className="row sample-row">
                          <div className="col-xs-6 col-sm-4 gutter-margin-xs-md">
                              <div className="inner" href="#Dynamodb">
                                  <button type="button" className="btn btn-success">Dynamodb</button>
                              </div>
                          </div>

                          <div className="col-xs-6 col-sm-8 gutter-margin-xs-md">
                              <div className="inner" href="#Cloudfront">
                                  <button type="button" className="btn btn-success">Cloudfront</button>
                              </div>
                          </div>
                      </div>


                  </div>
              </section>
          </div>


    );
}
}