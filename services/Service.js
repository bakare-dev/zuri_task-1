let instance;

class Service {

    constructor () {
        if(instance) return instance;

        instance = this;
    }

    getdata = (payload, callback) => {
        try {
            const slackName = payload.slack_name;
            const track = payload.track;

            const currentDate = new Date().toISOString().slice(0, -5) + "Z";

            const response = {
                slack_name: slackName,
                current_day: new Date().toLocaleDateString('en-US', { weekday: 'long'}),
                utc_time: currentDate,
                track: track,
                github_file_url: 'https://github.com/bakare-dev/zuri_task-1/blob/main/README.md',
                github_repo_url: 'https://github.com/bakare-dev/zuri_task-1',
                status: "200",
            };

            callback(response)
        } catch (ex) {
            console.log(ex);
            callback({status: 500, error: "internal server error"})
        }
    }
}

module.exports = Service;
