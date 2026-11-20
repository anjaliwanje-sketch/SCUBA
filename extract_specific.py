import cv2
import os

video_path = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\.user_uploaded\media_1795187384024_269ad937.mp4"
output_dir = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\scratch\motion_frames"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
for f_idx in [22, 26, 30, 34, 84, 88, 92, 96]:
    cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(os.path.join(output_dir, f"frame_{f_idx}.jpg"), frame)

cap.release()
print("Saved specific motion frames")
