import ModalTest from "./components/CustomModalPopUp/Modal-text"
import ScrollIndicator from "./components/CustomScrollIndicator"
import CustomTab from "./components/CustomTabs/Tab-test"
import GitHubProfileFinder from "./components/GitHubProfileFinder"
import ImageSlider from "./components/ImageSlider"
import LightDarkMode from "./components/LightDarkToggle"
import QrGnerator from "./components/Qr-Generator"
import SearchAutoComplete from "./components/searchAutoComplete/SearchAutoComplete "
import Accordian from "./components/accordian"
import LoadMoreBtn from "./components/loadMoreButton"
import RandomColor from "./components/randomColor"
import StarRating from "./components/starRating"
import TicTacToe from "./components/TicTacToe"
import FeatureFlags from "./components/FeatureFlag"
import FeatureFlagGlobalState from "./components/FeatureFlag/context"
import UseFetchHookTest from "./components/useFetch/test"
import UseOnClickOutsideTest from "./components/Use-Outside-Click/test"
import UseWindowResizeTest from "./components/Use-Window-Resize/test"
import ScrollToTopAndBottom from "./components/Scroll-to-top-and-bottom"
import ScrollToSection from "./components/Scroll-To-Section"

const App = () => {
  return (
    <>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}

    {/* Star Rating Component */}
    {/* <StarRating  noOfStars={10}/> */}

    {/* Image Slider Component */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}
    
    {/* Load More Button */}
    {/* <LoadMoreBtn /> */}



    {/* Qr code Generator */}
    {/* <QrGnerator /> */}


    {/* Light to Dark Mode */}
    {/* <LightDarkMode /> */}


    {/* Scroll Indicator Component */}
    {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}


    {/* CustomTab */}
    {/* <CustomTab /> */}


    {/* Custom Modal */}
    {/* <ModalTest /> */}


    {/* GitHub Profile Finder */}
    {/* <GitHubProfileFinder /> */}


    {/* Search Auto Complete */}
    {/* <SearchAutoComplete /> */}

    {/* TicTacToe game */}
    {/* <TicTacToe /> */}



    {/* FeatureFlagImplementation */}
    {/* <FeatureFlagGlobalState>
      <FeatureFlags />
    </FeatureFlagGlobalState> */}

    {/* UseFetch Custom Hook */}
    {/* <UseFetchHookTest /> */}
    

    {/* UseOnClick Outside */}
    {/* <UseOnClickOutsideTest /> */}

    {/* Use Window Resize custom hook */}
    {/* <UseWindowResizeTest /> */}



    {/* Scroll to top and bottom */}
    {/* <ScrollToTopAndBottom /> */}

    {/* Scroll To a Particular Section */}
    <ScrollToSection />


    </>
  )
}

export default App