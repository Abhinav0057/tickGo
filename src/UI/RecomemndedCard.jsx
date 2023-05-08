import React from 'react';
import defaultImage from '../assets/image/defaultConcert.jpg';
function RecomemndedCard() {
	return (
		<div>
			<div>
				{' '}
				<div className="card  my-3">
					<div
						className="card-img-top "
						style={{ height: '300px', width: '100%', position: 'relative' }}
					>
						{/* condition to see if image url is provided or use default  */}
						{/* {props.currentPost.imageUrl ? (
                <img
                    alt={'image'}
                    effect="blur"
                    src={props.imageUrl + props.currentPost.imageUrl}
                />
            ) : (
                <img src={defaultImage} className="" alt="..." />
            )} */}
						<img
							src={defaultImage}
							className=""
							alt="..."
							style={{ height: '300px', width: '100%', objectFit: 'cover' }}
						/>
					</div>
					<div
						className="card-body"
						style={{ width: '100%', position: 'absolute', bottom: '0' }}
					>
						<div className=" ">
							<button
								type="button"
								className="btn btn-danger "
								style={{ borderRadius: '16px', padding: '4px 16px' }}
							>
								Buy Now
							</button>
						</div>
						<div
							style={{
								width: '100%',
								overflow: 'hidden',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
							}}
							className="d-flex justify-content-left"
						>
							<h3
								style={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									textOverflow: 'ellipsis',
									color: 'white',
								}}
							>
								Brayn Adams Concenrt In Nepal
							</h3>
						</div>
						<h5
							className=""
							style={{
								overflow: 'hidden',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
								color: 'white',
							}}
						></h5>

						<p
							className=""
							style={{
								overflow: 'hidden',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
								color: 'white',
							}}
						>
							<i class="fa fa-calendar" aria-hidden="true"></i>
							23rd July 2023
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecomemndedCard;
