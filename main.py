import streamlit as st
import pandas as pd

# Page configuration
st.set_page_config(
    page_title="Museum Melody",
    page_icon="",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for bright & sophisticated design
st.markdown("""
<style>
    /* Main background and text colors */
    .stApp {
        background-color: #FFFFFF;
    }
    
    /* Title styling */
    .main-title {
        font-family: 'Georgia', serif;
        font-size: 3rem;
        font-weight: 700;
        color: #1a1a1a;
        text-align: center;
        margin-bottom: 0.5rem;
        letter-spacing: 0.05em;
    }
    
    .sub-title {
        font-family: 'Georgia', serif;
        font-size: 1.2rem;
        color: #555555;
        text-align: center;
        margin-bottom: 2rem;
        font-style: italic;
    }
    
    /* Card styling */
    .art-card {
        background-color: #FAFAFA;
        border: 1px solid #E8E8E8;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        transition: box-shadow 0.3s ease;
    }
    
    .art-card:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .art-title {
        font-family: 'Georgia', serif;
        font-size: 1.4rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.3rem;
    }
    
    .art-artist {
        font-size: 1rem;
        color: #0EA5E9;
        margin-bottom: 0.8rem;
        font-weight: 500;
    }
    
    .art-mood {
        display: inline-block;
        background-color: #E0F2FE;
        color: #0369A1;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.85rem;
        margin-bottom: 1rem;
    }
    
    .art-desc {
        font-size: 0.95rem;
        color: #444444;
        line-height: 1.7;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
    /* Sidebar styling */
    .sidebar-header {
        font-family: 'Georgia', serif;
        font-size: 1.3rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #0EA5E9;
    }
    
    /* Divider */
    .divider {
        height: 1px;
        background: linear-gradient(to right, transparent, #E8E8E8, transparent);
        margin: 2rem 0;
    }
    
    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #F5F5F5;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #CCCCCC;
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #AAAAAA;
    }
</style>
""", unsafe_allow_html=True)

# Artwork and music data
data = {
    'title': [
        '인상, 해돋이 (Impression, Sunrise)',
        '물랭 드 라 갈레트의 무도회 (Bal du moulin de la Galette)',
        '수련 (Water Lilies)',
        '별이 빛나는 밤 (The Starry Night)',
        '봄 (Spring)',
        '생트 빅투아르 산 (Mont Sainte-Victoire)',
        '테라스에서 (Two Sisters on the Terrace)'
    ],
    'artist': [
        '클로드 모네 (Claude Monet)',
        '피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)',
        '클로드 모네 (Claude Monet)',
        '빈센트 반 고흐 (Vincent van Gogh)',
        '피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)',
        '폴 세잔 (Paul Cezanne)',
        '피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)'
    ],
    'mood': [
        '평화로운',
        '활기찬',
        '평화로운',
        '로맨틱한',
        '로맨틱한',
        '평화로운',
        '활기찬'
    ],
    'image_url': [
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/Pierre-Auguste_Renoir_-_Spring_Bouquet.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_1904_-_Philadelphia_Museum_of_Art.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg'
    ],
    'youtube_url': [
        'https://www.youtube.com/watch?v=ygEL8xMqzVE',
        'https://www.youtube.com/watch?v=O6txOvK-mAk',
        'https://www.youtube.com/watch?v=2bosouX_d8Y',
        'https://www.youtube.com/watch?v=rJ5C_Z6FqEg',
        'https://www.youtube.com/watch?v=HLUX0y4EptA',
        'https://www.youtube.com/watch?v=kSE15tLBdso',
        'https://www.youtube.com/watch?v=7maJOI3QMu0'
    ],
    'desc': [
        '모네의 대표작으로, 아침 안개 속에 떠오르는 태양의 부드러운 빛을 담았습니다. 드뷔시의 아라베스크와 함께 감상하면, 인상주의 미술과 음악이 만들어내는 몽환적인 아침 풍경 속으로 빠져들게 됩니다.',
        '파리 몽마르트르의 활기찬 댄스 파티를 담은 이 작품은 바흐의 경쾌한 브란덴부르크 협주곡과 완벽한 조화를 이룹니다. 그림 속 인물들의 즐거운 움직임이 음악과 함께 살아 움직이는 듯합니다.',
        '모네가 말년에 심혈을 기울여 그린 수련 연작은 고요하고 명상적인 분위기를 자아냅니다. 사티의 짐노페디와 함께 감상하면 마치 평화로운 연못가에 앉아있는 듯한 깊은 평온함을 느낄 수 있습니다.',
        '반 고흐의 격정적인 붓터치로 그려진 밤하늘은 쇼팽의 녹턴과 함께할 때 더욱 깊은 감동을 선사합니다. 소용돌이치는 별빛과 피아노 선율이 어우러져 로맨틱한 밤의 정취를 완성합니다.',
        '르누아르가 담아낸 화사한 봄의 풍경은 비발디의 사계 중 봄과 최고의 조합을 이룹니다. 꽃과 따스한 햇살이 가득한 그림이 경쾌한 바이올린 선율과 만나 봄의 설렘을 전해줍니다.',
        '세잔이 수십 번에 걸쳐 그린 생트 빅투아르 산은 베토벤의 전원 교향곡과 함께 감상하기 좋습니다. 프로방스의 고요한 자연 풍경이 전원적인 선율과 어우러져 평화로운 힐링의 시간을 선사합니다.',
        '두 자매가 파리 교외의 테라스에서 보내는 화창한 오후를 담은 이 작품은 모차르트의 밝고 우아한 협주곡과 잘 어울립니다. 햇살 가득한 행복한 순간이 음악과 함께 더욱 생생하게 다가옵니다.'
    ]
}

df = pd.DataFrame(data)

# Sidebar
with st.sidebar:
    st.markdown('<div class="sidebar-header">Filter Options</div>', unsafe_allow_html=True)
    
    # Mood filter
    st.markdown("**분위기 선택**")
    all_moods = df['mood'].unique().tolist()
    selected_moods = st.multiselect(
        label="분위기를 선택하세요",
        options=all_moods,
        default=[],
        label_visibility="collapsed",
        key="mood_filter"
    )
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # Artist filter
    st.markdown("**작가 선택**")
    all_artists = df['artist'].unique().tolist()
    selected_artists = st.multiselect(
        label="작가를 선택하세요",
        options=all_artists,
        default=[],
        label_visibility="collapsed",
        key="artist_filter"
    )
    
    st.markdown("<br><br>", unsafe_allow_html=True)
    st.markdown("---")
    st.markdown(
        '<p style="color: #888888; font-size: 0.85rem; text-align: center;">Museum Melody</p>',
        unsafe_allow_html=True
    )

# Filter data
filtered_df = df.copy()

if selected_moods:
    filtered_df = filtered_df[filtered_df['mood'].isin(selected_moods)]

if selected_artists:
    filtered_df = filtered_df[filtered_df['artist'].isin(selected_artists)]

# Main content
st.markdown('<h1 class="main-title">Museum Melody</h1>', unsafe_allow_html=True)
st.markdown('<p class="sub-title">당신의 일상에 명화와 선율을 더합니다.</p>', unsafe_allow_html=True)
st.markdown('<div class="divider"></div>', unsafe_allow_html=True)

# Display filtered artworks
if len(filtered_df) == 0:
    st.info("선택한 조건에 맞는 작품이 없습니다. 필터를 조정해 주세요.")
else:
    for idx, row in filtered_df.iterrows():
        st.markdown('<div class="art-card">', unsafe_allow_html=True)
        
        col1, col2 = st.columns([1, 1], gap="large")
        
        with col1:
            st.image(row['image_url'], use_container_width=True)
        
        with col2:
            st.markdown(f'<div class="art-title">{row["title"]}</div>', unsafe_allow_html=True)
            st.markdown(f'<div class="art-artist">{row["artist"]}</div>', unsafe_allow_html=True)
            st.markdown(f'<span class="art-mood">{row["mood"]}</span>', unsafe_allow_html=True)
            st.markdown(f'<div class="art-desc">{row["desc"]}</div>', unsafe_allow_html=True)
            
            st.markdown("**추천 클래식 음악**")
            st.video(row['youtube_url'])
        
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('<div class="divider"></div>', unsafe_allow_html=True)

# Footer
st.markdown(
    """
    <div style="text-align: center; padding: 2rem; color: #AAAAAA; font-size: 0.85rem;">
        명화와 클래식 음악의 조화로운 만남
    </div>
    """,
    unsafe_allow_html=True
)
