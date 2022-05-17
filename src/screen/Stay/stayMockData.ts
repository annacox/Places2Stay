import PlaceholderImage from 'asset/image/placeholder.jpg';

const stayMockData = {
  title: '408 St. Jacques | Room #208',
  location: 'Old Montreal, Montreal',
  dates: 'Oct.29, 2021 - Oct.31, 2021',
  image: PlaceholderImage,
  details: [
    {
      title: 'Access codes',
      items: [
        {
          itemLabel: 'building',
          itemDetail: '7853',
        },
        {
          itemLabel: 'apartment',
          itemDetail: '7863',
        },
      ],
    },
    {
      title: 'Wifi',
      items: [
        {
          itemLabel: 'name',
          itemDetail: 'places2stay',
        },
        {
          itemLabel: 'secret',
          itemDetail: 'funwaytostay',
        },
      ],
    },
  ],
};

export default stayMockData;
