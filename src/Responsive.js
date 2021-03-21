import MediaQuery from 'react-responsive'
 
const Responsive = () => (
  <div>
    
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      
      <MediaQuery minDeviceWidth={1824}>
       
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution='2dppx'>
      
    </MediaQuery>
  </div>
)
export default Responsive;