import PlaceholderImage from 'asset/image/placeholder.jpg';
import MiamiImage from 'asset/image/miami.jpg';
import NewYorkImage from 'asset/image/new-york.jpg';
import MontrealImage from 'asset/image/montreal.jpg';
import VancouverImage from 'asset/image/vancouver.jpg';
import TorontoImage from 'asset/image/toronto.jpg';

const homeMockData = {
  sections: {
    placeCtas: {
      title: 'Find your getaway',
      description:
        'Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces',
      places: [
        {
          id: 1,
          image: PlaceholderImage,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Old Montreal, Montreal',
        },
        {
          id: 2,
          image: PlaceholderImage,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Boston',
        },
        {
          id: 3,
          image: PlaceholderImage,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Toronto',
        },
        {
          id: 4,
          image: PlaceholderImage,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Old Montreal, Montreal',
        },
      ],
    },
    cityCtas: {
      title: '20+ cities to explore',
      places: [
        {
          id: 1,
          image: MiamiImage,
          title: 'Miami',
        },
        {
          id: 2,
          image: NewYorkImage,
          title: 'New York',
          imageLabel: 'New',
        },
        {
          id: 3,
          image: MontrealImage,
          title: 'Montreal',
        },
        {
          id: 4,
          image: VancouverImage,
          title: 'Vancouver',
        },
        {
          id: 5,
          image: TorontoImage,
          title: 'Toronto',
        },
      ],
    },
  },
};

export default homeMockData;
