import cv2
import os

video_path = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\.user_uploaded\media_1795187384024_269ad937.mp4"
output_dir = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\scratch\video_transition"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Extract frames from frame 30 to 90 (1.0s to 3.0s)
for f_idx in range(30, 90, 5):
    cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(os.path.join(output_dir, f"trans_{f_idx}_{f_idx/fps:.2f}s.jpg"), frame)

cap.release()
print("Extracted transition frames")
