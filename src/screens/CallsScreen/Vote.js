import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';



class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        id: 0,
        winPoints: 0,
        participationPoints: 0,
        text: '',
      },
      itemList: [],
    };

  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={ styles.container }>
        <Question winPoints={ this.state.question.winPoints } participationPoints= { this.state.question.participationPoints } text = { this.state.question.text }></Question>
        <ItemList itemList={this.state.itemList}></ItemList>
      </SafeAreaView>
      </>
    );
  };

  componentDidMount() {
    this.setState({
      question: MOCK_DATA.question,
      itemList: MOCK_DATA.items,
      hasSelected: false
    })
    console.log('parent component mounted')
  }

}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSelected: false,
      selectedId: null
    };

    this.selectionHandler = this.selectionHandler.bind(this)
  }
    render() {
      return (
        <View style={ styles.itemList }>
          <FlatList
            data={ this.props.itemList }
            renderItem={({ item }) => <Item id={ item.id } displayVotes ={ this.state.hasSelected ? true : false } isSelected={item.id === this.state.selectedId ? true : false} selectionHandler={ this.selectionHandler } itemName={ item.itemName } totalSelections={ item.totalSelections } username={ item.username } upvotes = { item.upvotes } downvotes = { item.downvotes }/>}
            keyExtractor={item => item.id.toLocaleString()}
          />
        </View>
      )
    }
      
    selectionHandler(id) {
      console.log('selectionhandler')
      this.setState({
        hasSelected: true,
        selectedId: id
      })
    }
}


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };

    this.select = this.select.bind(this)
  }

  render() {
    if (this.props.displayVotes) {
      return (
        <View style={ this.props.isSelected==true ? styles.itemSelected : styles.item }>
          <View style={ styles.itemRow }><Text style={ styles.itemName }>{ this.props.itemName }</Text><View style={ styles.selectionsView }><Text style={ styles.totalSelections }>{ this.props.totalSelections.toLocaleString() }</Text><Image style={styles.imagestyle} source={require('../../assets/images/people.png')} /></View></View>
          <View style={ styles.itemRow }><Text style={ styles.username }>Submitted by: { this.props.username }</Text></View>
          <View style={ styles.itemRowBottom }><Text style={ styles.upvotes }>{ this.props.upvotes.toLocaleString() }</Text><VoteButton source={require('../../assets/images/thumbs_up.png')} action='upvote'></VoteButton><Text style={ styles.downvotes }>{ this.props.downvotes.toLocaleString() }</Text><VoteButton source={require('../../assets/images/thumbs_down.png')} action='downvote'></VoteButton></View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={this.select}>
          <View style={ this.props.isSelected==true ? styles.itemSelected : styles.item }>
            <View style={ styles.itemRow }><Text style={ styles.itemName }>{this.props.itemName }</Text><Text style={ styles.totalSelections }></Text></View>
            <View style={ styles.itemRow }></View>
            <View style={ styles.itemRowBottom }></View>
          </View>
        </TouchableOpacity>
      );
    
    }
    
  }

  select() {
    this.props.selectionHandler(this.props.id)
    this.setState({
      selected: true
    })
  }

  componentDidUpdate() {
    console.log('updated, state: ' + this.state.selected)
  }

  componentDidMount() {
    console.log('mounted, state: ' + this.state.selected)
  }

}

const Question = (props) => {
  return (
      <View style={ styles.question }>
      <Image style={styles.logoStyle} source={require('../../assets/images/promo.png')} />
        
        <Text style= {styles.questionText}>{ props.text }</Text>
      </View>
  );
}

const VoteButton = (props) => {
  return (
    <TouchableHighlight onPress={() => this.vote(props.action)}>
      <Image style={styles.imagestyle} source={props.source} />
    </TouchableHighlight>
  )
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    // backgroundColor: '#000000',

    //marginTop: Constants.statusBarHeight,
  },
  question: {
    flex: .5,
    flexDirection: 'column',
    backgroundColor: '#3F1D75',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: 'solid',
    borderColor: '#E4EEF3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    fontWeight: '800',
    color: '#ffffff',
    paddingVertical: 0,
    marginTop: -100
  },
  qLineOne: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: '#ffffff',
  },
  qLineTwo: {
    fontSize: 26,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#4ab153',
  },
  qLineThree: {
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#ffffff',
  },
  qLineFour: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: '#ffffff',
    fontWeight: '400',
  },
  itemList: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
    // backgroundColor: '#000000',

  },
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    minHeight: 99,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: 'solid',
    borderColor: '#E4EEF3',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 15,
    shadowOpacity: .1 
    
  },
  itemSelected: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f6f8f9',
    minHeight: 99,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: 'solid',
    borderColor: '#ef6192',
    borderWidth: 3,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 15,
    shadowOpacity: .1 
    
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  itemRowBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  selectionsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    color: '#3F1D75',
  },
  totalSelections: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#3F1D75',
    paddingRight: 5
  },
  username: {
    fontSize: 10,
    fontFamily: 'Helvetica Neue',
    color: '#3F1D75',
  },
  upvotes: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    marginRight: 5,
    color: '#3F1D75',
  },
  downvotes: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    marginLeft: 15,
    marginRight: 5,
    color: '#3F1D75',
  },
  imagestyle: {
    width: 10,
    height: 10,
    
  },
  logoStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -25
  }
});

const MOCK_DATA = 
{
  question: {
    id: 1,
    winPoints: 3000,
    participationPoints: 5,
    text: "Who is today's MVP?",
  },
  items: [
  {
    id: 1,
    itemName: 'Stephen Curry',
    username: "User 1",
    upvotes: 4532,
    downvotes: 2302,
    totalSelections: 11238,
    chosen: false
  },
  {
    id: 2,
    itemName: 'Anthony Davis',
    username: "User 2",
    upvotes: 2345,
    downvotes: 1643,
    totalSelections: 4325,
    chosen: false
  },
  {
    id: 3,
    itemName: 'Kyle Kuzma',
    username: "User 3",
    upvotes: 1674,
    downvotes: 578,
    totalSelections: 56,
    chosen: false
  },
  {
    id: 4,
    itemName: 'Dwight Howard',
    username: "User 4",
    upvotes: 809,
    downvotes: 34,
    totalSelections: 28,
    chosen: false
  }
  ]
};






export default Vote;
