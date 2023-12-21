// StyleRoute.js
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(248, 249, 250)',
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#3427c8',
  },
  label: {
    color: '#4E4E4E',
    fontWeight: 'bold',
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  cardItemLeft: {
    flex: 5,
    justifyContent: 'center',
  },
  cardItemRight: {
    flex: 5,
    flexDirection: 'column',
    gap: 5,
  },
  addCartBtn: {
    backgroundColor: '#3427c8',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 15,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#ffffff',
  },
  cardRank: {
    backgroundColor: 'rgba(245, 159, 0, 0.1)',
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  textCardRank: {
    color: '#F59F00',
    fontWeight: '900',
    fontSize: 12,
  },
  cardName: {
    color: 'black',
    fontWeight: '900',
  },
  cardPrice: {
    color: 'black',
  },
})

export default styles
