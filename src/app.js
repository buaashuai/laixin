import React, { Component } from 'react'
import Component1 from './component/itemOne/demo1'
import Component2 from './component/itemThree/demo2'
import $ from 'jquery';
require('./app.less');

 class App extends Component {
    constructor(props) {
        super(props);
        this.state = { articleList: []};
    }
    _setState=(articleList)=>{
        this.setState({ articleList: articleList});
    }
    //加载数据
    initData=()=>{
        let url =  'http://just.baidu.com/restapi/public/articlelist?version=1.0&topicid=2523888542';
        let setState = this._setState.bind(this);

        this.serverRequest = $.ajax({
            type: "GET",
            url: url,
            dataType: "jsonp",
            success : function(data){
                console.log('data');
                console.log(data);
                setState(data.response_params.article_list);
            },
            error:  function(data){
                console.error('error');
                console.error(data);
            }
        });
    }
    componentDidMount = () => {
        this.initData();
    }
    componentWillUnmount = () => {
        this.serverRequest.abort();
    }

  render() {
      let rows = [];
      let singleRow=[];
      let articleList = this.state.articleList;
      for (let item of articleList) {
          // console.log(item);
          singleRow.push(
              <div ><span className='fontColor'>{item.id}</span></div>
          );
          rows.push(singleRow);
      }

    return (
      <div>
          <div className="list-head">
              <div className="pageHeader">
                  <div className="imgbg">
                      <img src="http://just.baidu.com/static/img/doug/96ef7ad6ef20.jpg" id="topicImg"/>
                  </div>
                  <div className="msg">
                      <div className="fontheader">
                          <h1 className="title" id="topTitle">来信话题</h1>
                      </div>
                      <span className="description" id="fansPeople">来信话题简介12312312</span>
                  </div>
                  <div className="operation">
                      <div className="normal follow trblBor">
                          关注
                      </div>
                  </div>

              </div>
          </div>
          <div>{rows}</div>
        <Component1></Component1>
        <Component2></Component2>
      </div>
    )
  }
}
export default App;