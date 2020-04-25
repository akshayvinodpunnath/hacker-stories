import React from 'react';

const List = ({list}) => (
  list.map(item => (
  <Item 
    key={item.objectID} 
    {...item}
    /> 
    )
  )
)

const Item = ({title,url,author,num_comments,points}) => (
  <div>
        <span>
          <a href={url}>{title}</a>
        </span>
        <span> {author}</span>
        <span> {num_comments}</span>
        <span> {points}</span>
  </div>  
)

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStores = stories.filter(story =>
    story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <Search search={searchTerm} onSearch={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>

      <hr />
      
      <List list={searchedStores}/>
    </div>
    );
};

const Search = ({search, onSearch}) => (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" value={search} onChange={onSearch}/>
    </div>
);

export default App;
