import express from 'express';
import { matchRoutes } from 'react-router-config';
import render from './render';
import configureStore from '../shared/configureStore';
import Routes from '../shared/Routes';
const avengerDetails = [
    {id: 1, name: 'ironman', powers: ['fly', 'gadgets']},
    {id: 2, name: 'hulk', powers: ['smash']},
    {id: 3, name: 'thor', powers: ['fly', 'hammer']}
];

const PORT = process.env.PORT || 8082;
const app = express();

app.use(express.static('public'));
app.get('/avengers/list', function(req,res){
    return res.status(200).json(avengerDetails);
});
app.get('/avenger/:id', function(req,res){
    const id = req.params.id;
    let detail = avengerDetails.filter( item => item.id === Number(id))[0] || {};
    return res.status(200).json(detail);
})
app.get('*', async (req, res) => {
  const store = configureStore();
  const actionsArray = matchRoutes(Routes, req.path)
    .map(({ route }) => route.component.fetchInitialData ? route.component.fetchInitialData({...store, path: req.path }) : [])
    .reduce((accumulator,actions)=>{
        return [...accumulator,...actions];
    },[]);
  await  Promise.all(actionsArray);
  const context = {};
  const content = render(req.path, store, context);
  res.send(content);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));