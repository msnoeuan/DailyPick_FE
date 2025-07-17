// ./src/components/StatsSummary.jsx
import RegStore from '../assets/images/RegStore.svg'
import RegUser from '../assets/images/RegUser.svg'
import RegReview from '../assets/images/RegReview.svg'

function StatsSummary() {
    return (
        <div className="grid grid-cols-3 grid-rows-2 items-center px-40 py-10 font-bold text-lg">
            <img src = {RegStore} className='justify-self-center'/>
            <img src = {RegUser} className='justify-self-center' />
            <img src = {RegReview} className='justify-self-center'/>
            <div>
                <div className='justify-self-center'>1,000</div>
                <div className='justify-self-center'>등록된 맛집</div>
            </div>
            <div>
                <div className='justify-self-center'>1,000</div>
                <div className='justify-self-center'>활성 사용자</div>
            </div>

            <div>
                <div className='justify-self-center'>1,000</div>
                <div className='justify-self-center'>등록된 리뷰</div>
            </div>
        </div>
    )

}

export default StatsSummary