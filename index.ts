//Before Interface Segregation Principle
//interface UserInterface {
//  login(): void;
//  logout(): void;
//  createPost(): void;
//}

// After Interface Segregation Principle
interface AuthenticationInterface {
  login(): void;
  logout(): void;
}

interface PostManagementInterface {
  createPost(): void;
}

// Admin class implementing both AuthenticationInterface and PostManagementInterface

class Admin implements AuthenticationInterface, PostManagementInterface {
  login() {
    console.log("Admin logged in");
  }

  logout() {
    console.log("Admin logged out");
  }

  createPost() {
    console.log("Admin created a post")
  }
}


// RegularUser class implementing only AuthenticationInterface
class RegularUser implements AuthenticationInterface {
  login() {
    console.log("User logged in");
  }

  logout() {
    console.log("User logged out");
  }
// RegularUser does not implement createPost, as it doesn't have post creation permissions
}

// Usage
const admin = new Admin();
admin.login();
admin.logout();
admin.createPost(); // Admin can create posts

const regularUser = new RegularUser();
regularUser.login();
regularUser.logout();
// regularUser.createPost(); // Error: regularUser.createPost is not a function



// Good Example: Following Interface Segregation Principle
interface AudioPlayable {
  playAudio(): void;
}

interface VideoPlayable {
  playVideo(): void;
}

interface AudioRecordable {
  recordAudio(): void;
}

class AudioPlayer implements AudioPlayable {
  playAudio(): void {
    console.log("Playing audio");
  }
}

class VideoPlayer implements AudioPlayable, VideoPlayable {
  playAudio(): void {
    console.log("Playing audio");
  }

  playVideo(): void {
    console.log("Playing video");
  }
}

// Usage 
const audioPlayer = new AudioPlayer;
audioPlayer.playAudio(); // "Playing audio"
// audioPlayer.playVideo(); // Error: audioPlayer.playVideo is not a function

const videoPlayer = new VideoPlayer();
videoPlayer.playAudio(); // "Playing audio"
videoPlayer.playVideo(); // "Playing video"

// videoPlayer.recordAudio(); // Error: videoPlayer.recordAudio is not a function