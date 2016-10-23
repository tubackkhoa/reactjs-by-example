import test from 'tape';
import * as actions from 'store/actions/reddit';

test('action creator | requestPosts :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = actions.requestPosts('reactjs');
    const expectedAction = {
      type: actions.REQUEST_POSTS,
      subreddit: 'reactjs1'
    }

    deepEqual(actualAction, expectedAction)
    end()
  }
)
