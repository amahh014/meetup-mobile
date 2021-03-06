import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.151:3000/api';

const fakeGroupId = '5e24643d7b10b40c0cefcfca';

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {
        const { data } = await axios.get(this.path);

        return data.meetups;
    }
}

export {
    MeetupApi
};