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
          console.log(item);
          singleRow.push(
              <div ><span className='fontColor'>{item.id}</span></div>
          );
          rows.push(singleRow);
      }

    return (
      <div>
          <div>{rows}</div>
        <Component1></Component1>
        <Component2></Component2>
      </div>
    )
  }
}
export default App;